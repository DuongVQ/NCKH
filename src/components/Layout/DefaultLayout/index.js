import Header from "~/components/Layout/components/Header";
import Banner from "./Banner";

function DefaultLayout({ children }) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Banner />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;