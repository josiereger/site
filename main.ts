import { serve } from "https://deno.land/std@0.162.0/http/server.ts";

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const route = (route:string) => { const regexRoute = new RegExp(route, "gmi"); if(regexRoute.test(path)){ return path } else { return "/" }};
  const path = url.pathname;
  const file = (fp:string) => { return Deno.readFile(fp) }
  const file_extension = url.pathname.split("/")[url.pathname.split("/").length - 1].split(".")[1];

  if(path === "/") {
    return new Response(await file("./index.html"), { headers: { "content-type": contentType("html") } });
  }

  else {
    return new Response("404", { headers: { "content-type": "text/plain" } });
  }
}

await serve(handler);
