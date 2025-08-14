import BotaoGoogle from "./botaoGoogle";

interface props {
  fase1?: boolean;
  children: React.ReactNode;
}

export default function Content({ fase1, children }: props) {
  return (
    <div className={` flex justify-center items-center h-screen p-3 `}>
      <div className="border border-transparent rounded-4xl bg-slate-100 w-full h-1/2 p-10">
        <div className="flex justify-center ">
          {/* <Image></Image> */}
          <h1 className="text-black text-2xl font-bold">
            Welcome to DevToolsHub!
          </h1>
        </div>
        {/* inputs */}
        <div>{children}</div>
        {/* divisao */}
        <div className="flex items-center space-x-3">
          <span className="w-full h-[1px] bg-gray-500"></span>
          <p>ou</p>
          <span className="w-full h-[1px] bg-gray-500"></span>
        </div>
        {/* botao google */}
        <BotaoGoogle />
      </div>
    </div>
  );
}
