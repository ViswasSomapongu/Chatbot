# config.py
import os

class Config:
    def __init__(self, api_key_env_var, system_instruction):
        self.api_key = os.getenv(api_key_env_var)
        self.system_instruction = os.getenv(system_instruction)

config = Config(api_key_env_var='GOOGLE_API_KEY', system_instruction='SYSTEM_INSTRUCTIONS')
