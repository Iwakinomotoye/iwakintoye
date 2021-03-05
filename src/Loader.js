import './Loader.css';

export function Loader() {
    return (
        <div className="loader">
            <div className="loaderBg">
                <div className="layer-one"></div>
                <div className="layer-two"></div>
                <div className="layer-three"></div>
                <div className="layer-four"></div>
            </div>
            <div className="my-name">
                <div className="iwakin"><p>
                    <span>I</span>
                    <span>w</span>
                    <span>a</span>
                    <span>k</span>
                    <span>i</span>
                    <span>n</span>    
                </p></div>
                <div className="omotoye"><p>
                    <span>O</span>
                    <span>m</span>
                    <span>o</span>
                    <span>t</span>
                    <span>o</span>
                    <span>y</span>
                    <span>e</span>
                </p></div>
            </div>
        </div>
    )
}