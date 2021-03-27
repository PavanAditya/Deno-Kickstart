# Deno Js Kickstart

> A basic poc of collection of written for executing and checking the various available options in Deno framework. Written Language: Typescript(ts)

Run Command: `deno run server.ts`
- Deno includes sandboxing i.e. it prohibits the app from using the internals of the system like internet, file system and all
- During the run command the flags are to be added seperately for allowing access to the required system internals.

Command for Running a server with an api call: `deno run --allow-net server.ts`
Command for Running a server with an read file operation: `deno run --allow-read server.ts`
Command for Running a server with an write file operation: `deno run --allow-write server.ts`