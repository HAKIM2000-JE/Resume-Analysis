
import { useState , useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from 'react-player';
import OwnImage from './Image';

const ImgView = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [ismobile , setismobile] = useState(false)

    const [istablet , settablet] = useState(false)

    const [size, setsize] = useState(1000)


    const checkview =()=>{

      if(window.innerWidth<800){
          setsize(400)
          
      }else if(window.innerWidth>800 && window.innerWidth<1200){
        setsize(750)
        

      }else{
        setsize(1000)
      }
        
  }


  useEffect(() => {

    checkview()

  
        window.addEventListener("resize", checkview);
    
        
    
   
   
    }, []);



    return (
        <div className="bg-light">
            <div className="bg-white text-center text-3xl pb-5">
                <h2 className="font-bold leading-10"> <span className="text-orange">Seamlessly progress</span> candidate from <br /> one stage to another</h2>
            </div>
            <div className="flex flex-col justify-center w-5/6 mx-auto">

            <div className="w-9/12   md:mx-auto  ">

           
            <OwnImage src="/images/Group 12846.svg" layout="fill"  width={size}  alt="" />
                 

            
              
            </div>
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
