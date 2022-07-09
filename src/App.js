import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

function App() {
  const [postCode, setPostCode] = useState("");
  const [postDetails, setPostDetails] = useState({});

  const onFormSubmit = (link) => {
    // extract code from link
    const regex =
      /^https?:\/\/(?:www\.)?instagram\.com\/[^\/]+(?:\/[^\/]+)?\/([^\/]{11})\/.*$/;
    const matched = link.match(regex);
    if (!matched) return;

    const extractedPostCode = matched[1];
    // set post code
    setPostCode(extractedPostCode);
  };

  useEffect(() => {
    if (!postCode) return;
    // make api call to fetch post details
    console.log(postCode);
  }, [postCode]);

  return (
    <div className="font-nunito">
      <Navbar />
      <Header onFormSubmit={onFormSubmit} />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
