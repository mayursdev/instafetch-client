import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

const InstaAPIBaseURL = process.env.REACT_APP_API_SERVER_BASEURL;

function App() {
  const [postCode, setPostCode] = useState("");
  const [postDetails, setPostDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const defaultServerErrorMsg =
    "Sorry, there was an error fetching post from instafetch servers..";

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

  const fetchPostDetails = async (postCode) => {
    try {
      const { data } = await axios({
        url: `${InstaAPIBaseURL}/posts/${postCode}`,
        method: "GET",
      });
      if (data.status === "fail") {
        throw new Error("response status fail");
      }
      return data;
    } catch (error) {
      console.log(error);
      setError(defaultServerErrorMsg);
      return error;
    }
  };

  useEffect(() => {
    if (!postCode) return;
    // make api call to fetch post details
    (async () => {
      setIsLoading(true);
      const postDetailsResp = await fetchPostDetails(postCode);
      if (postDetailsResp.status !== "fail") {
        setPostDetails(postDetailsResp.postDetails);
      }
      setIsLoading(false);
    })();
  }, [postCode]);

  return (
    <div className="font-nunito">
      <Navbar />
      <Header onFormSubmit={onFormSubmit} />
      <DownloadSection
        postDetails={postDetails}
        isLoading={isLoading}
        error={error}
      />
      <Footer />
    </div>
  );
}

export default App;
