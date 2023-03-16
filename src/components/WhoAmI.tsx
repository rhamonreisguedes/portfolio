import profile from "../images/perfil.jpeg";

type Props = {};

const WhoAmI = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row">
      <div>
        <img
          src={profile}
          alt="Rhamon Guedes - Desenvolvedor"
        //   style={{ width: 200, height: 200, borderRadius: 100 }}
        className="rounded-full w-52 md:w-72"
        />
      </div>
      <div className="p-3">Texto</div>
    </div>
  );
};

export default WhoAmI;
