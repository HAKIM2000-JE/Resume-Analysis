const ImgView = () => {
    return (
        <div className="bg-light">
            <div className="bg-white text-center text-3xl pb-5">
                <h2 className="font-bold leading-10"> <span className="text-orange">Seamlessly progress</span> candidate from <br /> one stage to another</h2>
            </div>
            <div className="flex flex-col justify-center w-5/6 mx-auto">
                <img src="/images/Group 12827.png" alt="" />
                <div className="text-center pt-5 pb-12">
                    <button className="text-orange border-2 border-orange rounded-md py-2 px-8">How it works?</button>
                </div>
            </div>
        </div>
    )
}

export default ImgView
