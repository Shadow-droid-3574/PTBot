import os
from pydantic import BaseSettings

class Settings(BaseSettings):
    TELEGRAM_TOKEN: str
    WEBHOOK_SECRET: str | None = None
    USE_WEBHOOK: bool = False  # env "true" to enable
    BASE_URL: str | None = None
    DATABASE_URL: str
    REDIS_URL: str = "redis://redis:6379/0"

    class Config:
        env_file = ".env"

settings = Settings()
