export const ErrorPage = ({isAuth, setIsAuth}) => {
    setIsAuth(false);
    return (
    <>
        <h1 className="errorH1">Error 404: Page is not found.</h1>
    </>
    );

    
}