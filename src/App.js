import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

const InstaAPIBaseURL = process.env.REACT_APP_API_SERVER_BASEURL;

function App() {
  const [postCode, setPostCode] = useState("");
  const [postDetails, setPostDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = (link) => {
    // extract code from link
    const regex =
      /^https?:\/\/(?:www\.)?instagram\.com\/[^/]+(?:\/[^/]+)?\/([^/]{11})\/.*$/;
    const matched = link.match(regex);
    if (!matched) return;

    const extractedPostCode = matched[1];
    // set post code
    setPostCode(extractedPostCode);
  };

  useEffect(() => {
    if (!postCode) return;
    // make api call to fetch post details
    (async () => {
      setIsLoading((prev) => !prev);
      const response = await fetch(`${InstaAPIBaseURL}/posts/${postCode}`);
      const postDetailsResp = await response.json();
      if (postDetailsResp.status === "fail") return;
      setPostDetails(postDetailsResp.postDetails);
      setIsLoading((prev) => !prev);
    })();
  }, [postCode]);

  return (
    <div className="font-nunito">
      <Navbar />
      <Header onFormSubmit={onFormSubmit} />
      <DownloadSection postDetails={postDetails} isLoading={isLoading} />
      <Footer />
    </div>
  );
}

export default App;
