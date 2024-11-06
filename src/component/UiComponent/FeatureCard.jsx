import React from "react";
const feturedData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="size-10 text-blue-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
    title: "Free shipping",
    des: "when you spend $80 or more",
  },
  {
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg"  
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="2" 
        stroke="currentColor" 
        class="size-10 text-blue-700">
        <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
      </svg>

    ),
    title: "We are available 24x7",
    des: "need help? Contact us anytime",
  },
  {
    icon: (
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke-width="2" 
      stroke="currentColor" 
      class="size-10 text-blue-700">
  <path 
  stroke-linecap="round"
  stroke-linejoin="round" 
  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

    ),
    title: "Satisfied or return",
    des: "Easy 30-day return policy",
  },
  {
    icon: (
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke-width="2" 
      stroke="currentColor" 
      class="size-10 text-blue-700">
  <path 
  stroke-linecap="round" 
  stroke-linejoin="round" 
  d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
</svg>

    ),
    title: "100% secure payments",
    des: "Visa, Mastercard, Stripe, PayPal",
  },
];

const CardSection = ({ id, icon, title, des }) => {
  return (
    <>
      <div
        className={
          id != 3 ? "flex items-center justify-evenly gap-2 " : "flex items-center  gap-2 "
        }
      >
        <div id="icon">{icon}</div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-400">{des}</p>
        </div>
        {id !== 3 && <div className="w-2 h-12 bg-slate-500"></div>}
      </div>
    </>
  );
};

const FeatureCard = () => {
  return (
    <div className="border-2 w-11/12  grid grid-cols-4 items-center justify-evenly border-black mx-auto my-3 py-6 px-3 ">
      {feturedData.map((data, index) => (
        <CardSection
          id={index}
          title={data?.title}
          icon={data.icon}
          des={data.des}
        />
      ))}
    </div>
  );
};

export default FeatureCard;