import React, { useState, useRef, useEffect } from "react";

const ChatWidget = () => {
  const [question, setQuestion] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [errorInResponse, setErrorInResponse] = useState(false)
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatLog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://chatbot-dlm9.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();

      const updatedChatLog = [
        ...chatLog,
        { question, response: data.response, copyStatus: "Copy" },
      ];
      setChatLog(updatedChatLog);
      setErrorInResponse(false)
    } catch (error) {
      setErrorInResponse(true)
    }
    setQuestion("");
  };

  const handleCopy = (index) => {
    const response = chatLog[index].response;

    navigator.clipboard
      .writeText(response)
      .then(() => {
        const updatedChatLog = [...chatLog];
        updatedChatLog[index].copyStatus = "Copied";
        setChatLog(updatedChatLog);

        setTimeout(() => {
          const resetChatLog = [...chatLog];
          resetChatLog[index].copyStatus = "Copy";
          setChatLog(resetChatLog);
        }, 3000); // 3 seconds delay
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  const handleEdit = (askedQuestion) => {
    setQuestion(askedQuestion);
  };

  return (
    <div className="h-full flex flex-col bg-gray-700 rounded-lg">
      <div
        ref={chatContainerRef}
        className="flex-grow overflow-y-auto p-5 bg-gray-700 border-gray-200 shadow-md"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        {chatLog.map((chat, index) => (
          <div
            key={index}
            className="mx-auto mt-5 p-5 bg-gray-700 rounded-lg shadow-md"
          >
            <div className="flex flex-row items-center">
              <h2 className="mt-0 mb-3 text-white flex-grow">
                {chat.question}
              </h2>
              <button
                onClick={() => handleEdit(chat.question)}
                className="ml-auto p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
              >
                <svg
                  className="w-[29px] h-[29px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 bg-black rounded-md">
              <div className="prose">
                <div className="text-white">{chat.response}</div>
                <button
                  onClick={() => handleCopy(index)}
                  className="mt-4 inline-flex items-center px-1 py-0 rounded-md bg-black text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <svg
                    className="w-4 h-4 mr-1.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5H5.75a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 10 1zm6.25 4.5a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 1-.75.75H5.75a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 0-.75-.75A1.75 1.75 0 0 0 3 10.25v10.5C3 19.216 3.784 20 4.75 20h10.5c.966 0 1.75-.784 1.75-1.75v-10.5c0-.966-.784-1.75-1.75-1.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {chat.copyStatus}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
       {errorInResponse && <div className="text-white text-center">Something went wrong. Please try again later.</div>}
      <form
        onSubmit={handleSubmit}
        className="p-5 bg-gray-700 border-gray-200 shadow-md"
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={question}
            placeholder="Message Battu"
            onChange={(e) => setQuestion(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-black focus:ring-blue-500 focus:border-blue-500 dark:bg-black"
            required
          />
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600 absolute end-2.5 bottom-2.5"
          >
            <svg
              className="w-5 h-5 rotate-90 rtl:-rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Send</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWidget;
