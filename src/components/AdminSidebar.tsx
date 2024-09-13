import { useEffect, useState } from "react";
import { IconType } from "react-icons";
// Div One, Two and Three are uses for the ICons
// Div One
import { AiFillFileText } from "react-icons/ai";
// 
import {
    // Div Two
    FaChartBar,
    FaChartPie,
    FaChartLine,
    // Div Three
    FaGamepad,
    FaStopwatch
} from "react-icons/fa";    // 
import { HiMenuAlt4 } from "react-icons/hi";
// Div One
import { IoIosPeople } from "react-icons/io";
import {
    // Div Three
    RiCoupon3Fill,
    // Div One
    RiDashboardFill,
    RiShoppingBag3Fill
} from "react-icons/ri";
import {
    Link,
    Location,
    useLocation
} from "react-router-dom";

const AdminSidebar = () => {
    const location = useLocation();
    // console.log(location);

    // uses for hamburger open or close depend on the value true or false
    const [showModal, setShowModal] = useState<boolean>(false);  

    // represent for responsive below 1100-width by default
    const [phoneActive, setPhoneActive] = useState<boolean>(
        window.innerWidth < 1100
    );

    // It handle will automatically refresh the pages of 100% width when the pages is checked for responsive
    const resizeHandler = () => {
        setPhoneActive(window.innerWidth < 1100);
    }

    useEffect(() =>{   // uses of useEffect to perform sideEffect on each renders for responsive pages
        window.addEventListener("resize", resizeHandler);

        return() => {
            window.addEventListener("resize", resizeHandler);
        }
    }, []);

  return (
    <>
    {/* uses for show the hamburger */}
        {
        phoneActive 
            && 
        <button 
            id="hamburger"
            onClick={() => setShowModal(true)}>
                {/* uses for hamburger line */}
                <HiMenuAlt4 />
        </button>}

        {/* uses for right hand side of the pages */}
        <aside style={
            // uses for close the hamburger
            phoneActive 
            ?   {
                    width: "20rem",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: showModal ? "0" : "-20rem",
                    transition: "all 0.5s"
                }
            :   {}

        }>
            {/* uses for the all of the three section */}
            <h2>Logo.</h2>
            {/* first section - dashboard(dashboard, products, customers, transactions) */}
            <DivOne location={location} />
            {/* second section - charts(bar, pie and line) */}
            <DivTwo location={location} />
            {/* third section - apps(stopwatch, coupon and toss) */}
            <DivThree location={location} />

            {/* uses for close button when click the button close the humbarger */}
            {
                phoneActive && <button id="close-sidebar" onClick={() => setShowModal(false)}>Close</button>
            }
        </aside>
    </>
  )
}

const DivOne = ({ location }:{ location: Location }) => (
    <div>
        <h5>Dashboard</h5>
        <ul>
            {/* used for nevigate the pages */}
            <Li 
                url="/admindashboard/dashboard" 
                text="Dashboard" 
                Icon={RiDashboardFill} 
                location={location} 
            />
            <Li 
                url="/admindashboard/products" 
                text="Products" 
                Icon={RiShoppingBag3Fill} 
                location={location} 
            />
            <Li 
                url="/admindashboard/customers" 
                text="Customers" 
                Icon={IoIosPeople} 
                location={location} 
            />
            <Li 
                url="/admindashboard/transaction" 
                text="Transactions" 
                Icon={AiFillFileText} 
                location={location} 
            />
        </ul>
    </div>
);

const DivTwo = ({ location }:{ location: Location }) => (
    <div>
        <h5>Charts</h5>
        <ul>
            {/* used for navigate the pages */}
            <Li 
                url="/admindashboard/chart/bar" 
                text="Bar" 
                Icon={FaChartBar} 
                location={location} 
            />
            <Li 
                url="/admindashboard/chart/pie" 
                text="Pie" 
                Icon={FaChartPie} 
                location={location} 
            />
            <Li 
                url="/admindashboard/chart/line" 
                text="Line" 
                Icon={FaChartLine} 
                location={location} 
            />
        </ul>
    </div>
);

const DivThree = ({ location }:{ location: Location }) => (
    <div>
        <h5>Apps</h5>
        <ul>
            {/* used for nevigate the pages */}
            <Li 
                url="/admindashboard/app/stopwatch" 
                text="Stopwatch" 
                Icon={FaStopwatch} 
                location={location} 
            />
            <Li 
                url="/admindashboard/app/coupon" 
                text="Coupon" 
                Icon={RiCoupon3Fill} 
                location={location} 
            />
            <Li 
                url="/admindashboard/app/toss" 
                text="Toss" 
                Icon={FaGamepad} 
                location={location} 
            />
        </ul>
    </div>
);


interface LiProps {
    url: string, 
    text: string, 
    location: Location, 
    Icon: IconType, 
}

const Li = ({ url, text, location, Icon }: LiProps) => 
// style for the button link when click the button styling is worked for the particular pages but rest of the pages is ignored.
<li style={
    {
        backgroundColor: location.pathname.includes(url)
        ? "rgba(0, 115, 255, 0.1)"
        : "white",
    }
}>
    {/* It is used for show the item of the pages like-: Link, Icon and the text */}
    {/* ex-: url link(admin/dashboard), Icon(RiDashboardFill) and text(dashboard)  */}
    <Link to={url} style={{
        color: location.pathname.includes(url)
        ? "rgb(0, 115, 255)"
        : "black"
    }}>
        <Icon />
        {text}
    </Link>
</li>;

export default AdminSidebar;
