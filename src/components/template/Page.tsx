import Footer from "./Footer"
import Header from "./Header"


export default function Page(props: any) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 flex">
                <main className="flex-1 p-8">{props.children}</main>
            </div>
            <Footer />
        </div>
    )
}