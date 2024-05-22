import FooterComponent from "../footer";
import HeaderComponent from "../header";
import RouteComponent from "../route";
import SidebarMenu from "../sidebar";

function HomeComponent({showmenu,displayusername}) { 
  return (
    <div style={{display:'flex',flexDirection:'column',flex:1,height:"100vh"}}>
     <HeaderComponent showmenu={showmenu} displayusername={displayusername} />
      <div style={{display:'flex',flexDirection:'row',flex:1}}>
        <SidebarMenu showmenu={showmenu}/>
        <RouteComponent/>
      </div>
      <FooterComponent/>
    </div>
  );
}



export default HomeComponent;
