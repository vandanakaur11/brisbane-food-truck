import { useEffect, useState } from "react";
import classes from "./Tables.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Tables() {
    const history = useNavigate();
    const [tData, setTdata] = useState("");
    console.log(tData);
    useEffect(() => {
        getTableData();
    }, []);
    const getTableData = async () => {
        try {
            let res = await axios.get("https://www.bnefoodtrucks.com.au/api/1/trucks");
            setTdata(res);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={classes.mainWrap}>
            <div className={classes.nav}>
                <div onClick={() => history("map")}>Goto Map</div>
            </div>
            <h1>Brisbane Food Trucks</h1>
            <div className={classes.wrapper}>
                <div className={classes.inner}>
                    <div className={classes.left}>{"Food Truck ID"}</div>
                    <div className={classes.right}>{"71"}</div>
                </div>
                <div className={classes.inner}>
                    <div className={classes.left}>{"Name"}</div>
                    <div className={classes.right}>{"Kpma Sliders"}</div>
                </div>
                <div className={classes.inner}>
                    <div className={classes.left}>{"Category"}</div>
                    <div className={classes.right}>{"Korean"}</div>
                </div>
                <div className={classes.inner}>
                    <div className={classes.left}>{"Bio/Description"}</div>
                    <div className={classes.right}>
                        {
                            "It's Korean.  It's American. It's Slider-licious! True to our moniker, Koma Sliders is food truck that stands out by fusing two different cuisines and serving up something different and delicious.   From our cook-to-order fully loaded fries that come topped off with mozzarella cheese, Bulgogi beef, caramelised kimchi, and aioli + spicy mayo.  To the meats that are prepared in our original, made-from-scratch marinades.  To our style of cooking, juicy Korean BBQ meats cooked right in front of your eyes for our sliders.   Everything has aKorean inspiration behind it."
                        }
                    </div>
                </div>
                <div className={classes.inner}>
                    <div className={classes.left}>{"Website"}</div>
                    <div className={classes.right}>{"url"}</div>
                </div>
            </div>
        </div>
    );
}

export default Tables;
