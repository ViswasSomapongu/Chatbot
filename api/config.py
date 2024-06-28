# config.py
import os

class Config:
    def __init__(self, api_key_env_var, instructions_file_path):
        self.api_key = os.getenv(api_key_env_var)
        self.system_instruction = self._get_system_instruction(instructions_file_path)

    def _get_system_instruction(self, file_path):
        with open(file_path, 'r') as file:
            return file.read()

# Example usage
config = Config(api_key_env_var='GOOGLE_API_KEY', instructions_file_path='instructions.txt')
