import Settings from "../../components/Settings";
import Layout from "../../components/generallayout";
import SideBarMenu from "../../components/SideBarMenu";
import NavbarLogged from "../../components/NavbarLogged";
import Alert from 'react-bootstrap/Alert';

export default function SettingsPage(){
    return <>
        <d>
            <NavbarLogged/>
            <br/>
            <Layout feedsidebar={<SideBarMenu active="settings"/>}>
                <Alert variant={"dark"}>
                    Write something
                </Alert>
                <Settings/>
            </Layout>
        </d>
    </>
}