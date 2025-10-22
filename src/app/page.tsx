import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductsList from './components/productsList/ProdutsList';
export default function HomePage() {
  return (
        <div className="page-container">
      <Header />
      
        
      <main className="content" style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", padding: "2rem" ,marginTop: "5%"}}>
     
      <ProductsList/>
      </main>
  

      <Footer />
    </div>
      );
}
