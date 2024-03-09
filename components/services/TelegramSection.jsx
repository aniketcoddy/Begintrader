import React from "react";
import Group from "../../utils/images/Group.png";
import Image from "next/image";
import StockOptions from "../../utils/icons/StockOptionB.svg";
import IndexOption from "../../utils/icons/IndexOptionB.svg";
import JackpotCalls from "../../utils/icons/JackpotCallsB.svg";
import MarketNews from "../../utils/icons/MarketNewsB.svg";
import LiveMarket from "../../utils/icons/LiveMarketB.svg";
import WhatsApp from "../../utils/icons/WhatsApp.svg";
import Telegram from "../../utils/icons/Telegram.svg";

const TelegramSection = () => {
  return (
    <div className="bg-[#fdf4eb] w-[410px] rounded-lg shadow-lg lg:w-[390px] sm:w-[360px]">
    <p className="text-[#1c93e3] font-bold text-2xl leading-[36px] p-4">
      Join Our Telegram Group
      <span className="text-black">
        <br />
        for Market News and
        <br />
        Updates !
      </span>
    </p>
    <div className="bg-[#1c93e3] w-[380px] font-semibold text-[13px] py-2 px-3 text-white rounded-tr-full rounded-br-full sm:w-[360px]">
      <p>Ideal for Traders looking to start their trading journey</p>
    </div>
    <div className="p-4">
      <p className="font-bold text-lg">DISCOVER THE SECRETS TO :</p>
      <div className="font-semibold space-y-2 mt-2 text-sm ">
        <Wrap>
          <Image src={StockOptions} className="w-4" alt="" />
          <p>Intraday Stock Options Calls</p>
        </Wrap>
        <Wrap>
          <Image src={IndexOption} className="w-4" alt="" />
          <p>Intraday Index Options Calls</p>
        </Wrap>
        <Wrap>
          <Image src={JackpotCalls} className="w-4" alt=""/>
          <p>Expiry Day Jackpot Calls</p>
        </Wrap>
        <Wrap>
          <Image src={MarketNews} className="w-4" alt="" />
          <p>Market News and Updates</p>
        </Wrap>
        <Wrap>
          <Image src={LiveMarket} className="w-4" alt="" />
          <p>Live market Support</p>
        </Wrap>
      </div>{" "}
      <a href="https://telegram.me/begin_trader" target="_blank">
        <button className="mt-4 text-white btn shadow-2xl">
          Join In Now
        </button>
      </a>
      <div className="mt-4 flex items-center justify-between">
        <Image src={Group} className="w-[220px]" alt="Image by Freepik" />
        <div className="text-right">
          <p className="text-sm font-bold">MENTORED BY</p>
          <p className="font-bold text-[#1c93e3]">SIVA SANKAR R</p>
          <p className="w-[100px] h-[3px] bg-primaryDark rounded-full ml-auto my-2"></p>
          <p className="text-xs font-semibold">BEGIN TRADER</p>
          <p className="text-xs font-semibold">MARKETING EXPERT</p>
          <p className="text-xs font-semibold">& FOUNDER</p>
        </div>
      </div>
    </div>
  </div>
);
};

const Wrap = ({ children }) => (
<div className="flex space-x-2 text-base">{children}</div>
);

export default TelegramSection
