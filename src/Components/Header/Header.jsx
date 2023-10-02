const Header = ({title,discrip}) => {
    return (
        <div className="text-center mt-5">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-xl my-3 w-2/5 mx-auto">{discrip}</p>
        </div>
    );
};

export default Header;