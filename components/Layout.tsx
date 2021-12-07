import { type } from "os";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProperties = {
    children: React.ReactNode
}

export function Layout(props: LayoutProperties){
    return <>
        <Header></Header>
        {props.children}
        <Footer></Footer> 
    </>
}