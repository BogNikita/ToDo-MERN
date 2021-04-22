import { Layout } from 'antd';
import { useRoutes } from "./route";
import { BrowserRouter, Link } from "react-router-dom";
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

const { Header, Content, Footer } = Layout;



function App() {
  const {token, login, logout, userId} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
       <BrowserRouter>
      <Layout className="layout">
        <Header>
          <div className="logo">
            <h1>ToDo React</h1>
            {isAuthenticated ? <Link to='/' onClick={logout}>Выйти</Link> : null}
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <div className="wrapper">
              {routes}
            </div> 
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Todo list React@</Footer>
      </Layout>
     </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
