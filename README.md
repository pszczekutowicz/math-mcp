# Project math-mcp

A simple math server using Model Context Protocol (MCP) and `mathjs` for evaluating mathematical expressions.

## Features

- Evaluate complex mathematical expressions
- MCP server with stdio transport
- TypeScript support

## Installation

1. **Build the Docker Image**
   
   Build the image using a tag (e.g., `math-mcp`).
   ```bash
    docker image build -t math-mcp .
   ```

2. **Configure Your MCP Client**
   ```json
   {
     "servers": {
       "math-server": {
         "type": "stdio",
         "command": "docker",
         "args": ["run", "--interactive", "--rm", "math-mcp"] 
       }
     },
     "inputs": []
   }
   ```
