import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { z } from "zod"

import { evaluate } from 'mathjs'

const server = new McpServer({
  name: "math-server",
  version: "1.0.0"
});

server.registerTool("evaluate",
  {
    title: "Evaluate math expressions",
    description: "This tool can evaluate complex mathematical expressions provided as an string",
    inputSchema: { expression: z.string().describe("Mathematical expression string") }
  },
  async ({ expression }) => {
    const result = evaluate(expression)
    return {
      content: [{ type: "text", text: String(result) }]
    }
  }
);

const transport = new StdioServerTransport()
await server.connect(transport)
