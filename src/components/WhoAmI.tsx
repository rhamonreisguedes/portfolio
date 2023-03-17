import profile from "../images/perfil.jpeg";
import brasil from "../images/brasil.jpg";
import eua from "../images/eua.png";

type Props = {};

const WhoAmI = (props: Props) => {
  return (
    <div className="bg-gray-300">
        <div className="text-center pt-3 text-2xl md:text-3xl font-bold">
          Quem sou eu?
        </div>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="w-7/12 py-3 md:w-3/12">
          <img
            src={profile}
            alt="Rhamon Guedes - Desenvolvedor"
            className="rounded-full md:w-10/12"
          />
        </div>
        <div className="w-10/12 text-center text-lg md:w-6/12 md:text-2xl">
          Depois de muitos anos na Indústria de Óleo e Gás, decidi fazer uma
          <strong> transição de carreira</strong> para a Indústria da
          Tecnologia. Sempre quero
          <strong> aprender coisas novas</strong>, ser{" "}
          <strong>desafiado</strong> e <strong>criar</strong>. Estou em busca da
          minha primeira oportunidade como um Desenvolvedor depois de participar
          do
          <strong> Bootcamp Full Stack Web</strong> do Instituto Infnet.
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
