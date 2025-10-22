import Image from "next/image";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Card from "./components/card/Card";
export default function HomePage() {
  return (
        <div className="page-container">
      <Header />

        
      <main className="content" style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", padding: "2rem" ,marginTop: "5%"}}>
      <Card
          image="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
          title="Summer Dress"
          description="A stylish summer dress perfect for sunny days."
          price={49.99}
        />

        <Card
          image="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg"
          title="Casual Jacket"
          description="Comfortable and trendy jacket for everyday wear."
          price={79.99}
        />

      <Card
          image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
          title="Stylish T-Shirt"
          description="Soft cotton T-shirt in multiple colors."
          price={29.99}
        />
        <Card
          image="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
          title="Summer Dress"
          description="A stylish summer dress perfect for sunny days."
          price={49.99}
        />

        <Card
          image="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg"
          title="Casual Jacket"
          description="Comfortable and trendy jacket for everyday wear."
          price={79.99}
        />

      <Card
          image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
          title="Stylish T-Shirt"
          description="Soft cotton T-shirt in multiple colors."
          price={29.99}
        />
<Card
          image="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg"
          title="Casual Jacket"
          description="Comfortable and trendy jacket for everyday wear."
          price={79.99}
        />

      <Card
          image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
          title="Stylish T-Shirt"
          description="Soft cotton T-shirt in multiple colors."
          price={29.99}
        />

      </main>
  

      <Footer />
    </div>
      );
}
