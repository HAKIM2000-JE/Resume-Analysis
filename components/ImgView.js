
import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from 'react-player';
import OwnImage from './Image';

const ImgView = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className="bg-light">
            <div className="bg-white text-center text-3xl pb-5">
                <h2 className="font-bold leading-10"> <span className="text-orange">Seamlessly progress</span> candidate from <br /> one stage to another</h2>
            </div>
            <div className="flex flex-col justify-center w-5/6 mx-auto">
                <OwnImage src="/images/Group 12846.svg" layout="fill"  width={1300}  alt="" />
                <div className="text-center pt-5 pb-12">
                    <button className="text-orange border-2 border-orange rounded-md py-2 px-8" onClick={onOpenModal} >How it works?</button>
                </div>


            </div>

            <Modal
                    open={open}
                
                
                    onClose={onCloseModal}
                    styles={{
                        modal: {
                          maxWidth: "unset",
                          width: "50%",
                          padding: "unset",
                          
                          
                        },
                        overlay: {
                          background: "rgba(0, 0, 0, 0.5)"
                        },
                        closeButton: {
                          background: "#fb7c51",
                          color:"white"
                        }
                      }}
                      center
                      
                   >
                  
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'  playing={open} width="100%"  height="calc(100vh - 100px)" 
                    
                   />
                   
      </Modal>
        </div>
    )
}

export default ImgView
