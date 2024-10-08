// import { log } from "console";
import "./globals.css";

type ReactLayoutProps = {
  children: React.ReactNode;
};

const ReactLayout: React.FC<ReactLayoutProps> =(props)=> {
  console.log(props , "Props");
  return (
    <html lang="eng">
      <head></head>
      <body> {props.children}</body>
    </html>
  )
}

export default ReactLayout;
