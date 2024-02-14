import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Footer from "../components/Footer";

const Success = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h3>Thankyou for your Reservation</h3>
          <h1>Redirecting to Home in {countdown} seconds...</h1>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Success;