import { useState, useEffect } from "react";
import Modal from "react-modal";
import { PhotoContainer } from "../photoContainer";
import logo from "../../images/Faker-Gram.png";
import { UserButtons } from "../modal";

export const Home = ({ user }) => {
  const [photos, setPhotos] = useState([]);
  // const [userManagement, setuserManagement] = useState([]);
  const [showUserManagement, setShowUserManagement] = useState(false);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=6&limit=5"
      );
      const data = await response.json();
      setPhotos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const toggleShowUserManagement = () => {
    setShowUserManagement(!showUserManagement);
  };

  return (
    <div className="home">
      <>
        <div className="header">
          <div className="nav_bits" id="all_logo">
            <img id="sm_logo" src={logo} alt="instagram logo" />
            {/* src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" */}
          </div>
          <div className="nav_bits" id="user_welcome">
            <h1>{`Welcome ${user}`}</h1>
          </div>
          <div id="all_icon">
            <img
              className="icon"
              id="home_icon"
              src="https://image.similarpng.com/very-thumbnail/2021/08/Instagram-home-icon-on-transparent-background-PNG.png"
              alt="Home icon"
            />
            <img
              className="icon"
              id="msg_icon"
              src="https://mpng.subpng.com/20180425/wpq/kisspng-computer-icons-desktop-wallpaper-facebook-like-but-%E5%85%8D%E8%B4%B9%E5%85%A5%E5%9C%BA-5ae08fe81dbb28.9147089315246663441218.jpg"
              alt="Message icon"
            />
            <img
              className="icon"
              id="npost_icon"
              src="https://icons-for-free.com/iconfiles/png/512/add+photo+plus+upload+icon-1320184050039319890.png"
              alt="New Post Icon"
            />
            <img
              className="icon"
              id="discover_icon"
              src="https://icon-library.com/images/icon-for-discover/icon-for-discover-17.jpg"
              alt="Discover Icon"
            />
            <img
              className="icon"
              id="activ_icon"
              src="https://pic.onlinewebfonts.com/svg/img_121218.png"
              alt="Activity Icon"
            />
            <button
              // type="image"
              id="user_management"
              // src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
              // alt="User Management"
              onClick={toggleShowUserManagement}
            />
            <Modal isOpen={showUserManagement}>
              <button onClick={toggleShowUserManagement}>CLOSE</button>
              <UserButtons />
            </Modal>
          </div>
        </div>
        {/* <button onClick={fetchPhotos}>Get Photos</button> */}
        <div className="post_container">
          {photos.map((item, index) => (
            <PhotoContainer photo={item} />
          ))}
        </div>
      </>
      {/* <UserManagement /> */}
    </div>
  );
};
