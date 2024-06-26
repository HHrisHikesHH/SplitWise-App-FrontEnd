
import MainUI from "../mainUi/MainUI";
import TwoButtons from "../mainUi/TwoButtons";
import DashBoardInfo from "./DashBoardInfo";
import Logo from "../navbar/Logo";
function DashboardPage() {
     return (
          <>
               <Logo />
               <div className="container bg-light my-4" style={{ borderRadius: '30px', maxWidth: '80%' }}>
                    <div className="d-flex justify-content-between">
                         <MainUI />
                         <div className="btnAndInfo my-4 ml-4"> {/* Adjust the margin class here */}
                              <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '15px' }}> {/* Division line */}
                                   <TwoButtons />
                                   <DashBoardInfo />
                              </div>
                         </div>
                    </div>
               </div>



          </>
     )
}


export default DashboardPage;