import * as express from "express"
import { createApp } from "../node/app"
import { parse, setDefaults, parseConfigFile, DefaultedArgs } from "../node/cli"
import { register } from "../node/routes"
import * as httpserver from "./httpserver"

export async function setup(
  argv: string[],
  configFile?: string,
): Promise<[express.Application, express.Application, httpserver.HttpServer, DefaultedArgs]> {
  argv = ["--bind-addr=localhost:0", ...argv]

  const cliArgs = parse(argv)
  const configArgs = parseConfigFile(configFile || "", "test/integration.ts")
  const args = await setDefaults(cliArgs, configArgs)

  const [app, wsApp, server] = await createApp(args)
  await register(app, wsApp, server, args)

  return [app, wsApp, new httpserver.HttpServer(server), args]
}
