---
title: Installation
description: Install and run MYC0-1 using Docker.
---

## Requirements

- Docker
- Docker Compose
- A folder containing your music

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/domza64/myc0-1.git
   cd myc0-1
   ```

2. Edit `docker-compose.yml` and set:

   - Path to your music folder
   - Path where MYC0-1 can store its data

3. Start the application:

   ```bash
   docker-compose up -d
   ```

## Access

Open your browser and go to:

```
http://localhost:5000
```

## Notes

- This project is in early development — expect breaking changes
