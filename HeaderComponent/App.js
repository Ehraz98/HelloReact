import React from 'react';
import ReactDOM from 'react-dom/client';

const images = [
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAAB4CAMAAABSHEeBAAABQVBMVEX///8Afdz/0AD/2QD/6AD/5QD/3QD/1AD/4QD/0gD/zgD/2wD/4wD/3wD/6gD+7mf//vn+5Yv/2WH/tQD/3n/98rH/xgD/ygAAet+Qm4r/uQD/ngCqs4L/qzcHfNX/vwCDr+f/6If/qwD/pQD/7YEAX77SrQH/4TH/1Tf/6Lf/ujf/sDfmwwEAeOP/vzf///TeuQEAdef/99//8sL0yAT/xzfs7fDtzQAAY84AasX/7LD/4HX++ND/6Sz/8JH/6VD/8qD/60L/5Fvy7s/v7N7v8f745W7z5Y/p4cz356HpzVDn1qfewFXl0JPn0ID220XczUDLxVLGvVq5tmxZg6AgcLFOhrJ5lJVReasgcLxWjseUo35xnbDp2CpikrMAVsYAb+2MqJs4hdGmr3GmrJDItmGKoaqGmK5xjrnmxze0u71Y3qDjAAAI8UlEQVR4nO3ci1faSh4H8AB5kwDWItFl6XUX0e6SEsAmakXq6+7qdZeXYkWhIt627P//B+xMAgGSIQHtmSTn9Hvu7eMyk5sPv5nJBDwhiF/5lSCndLDy83NQ8tRU/rTDp0D4OQnPzZwOKT38zqdDj0SJ0ko45Xbyy2esC6+UEh6oyty4RD8TZbr4VLjsger9RoqHp+B2kpwtC7DAL2sb771Qra6uvkuhFfM8CBuKyYdT78DRvVKtbthReUXZ5WZIDDfnL7D5rqLk7Sx4bA9V1hNilBzILjM58fHCNoo+vCawXdhcYaxvzYaXqjVBnJ1XXDhnnKYuMkBrlhg2Q2a8CTl+9s3hWWHNM9UGE4vRFtVubvzm8ybo3UwmMtB8pNq1qmIxxiPVmhAjbarRCOR1kcHYsMTEAdhoBFrGMS+CIwvvvFBlyRgJVLMojtkFLAWaTNCqJWOb4VKMaTjLEuGhySx20yFFwsyoRgtAitdNCI/FZsD4MGO7irEx/egVzPumrIEiY6IFFR6VaUz6GzojmD4S4UC0sERDRVJHGE2HVXKUSa3GptSalfR3Sywwo16zrrGKJKu4tu+FzyRpVRljbzz0TJKu+Is1Y5tZMNNlV5HkZyyb3FKVRKvA1g2gDJNBsnlmaOOC6S6wSZ+Ui59Sxcg4jnId0dvT2ZnKx48fP3z48A+Qf4L81SWwDWwLunwAPacPNPN/oC8wqEoXSczBUatkHHOqSQyqbAx3cFyNwZ7CMaTL6/b2bgfEo3JIjBKqVacG9hzHjynnFp6rqMhJYvp65p7K6Xlhm/a1KsZyp6p65vLezyQOLrIHnODUZNNjFSnwYBkuLYEi4wXQgXd8HzxXkRxULVOr6plKnIZjTk28V5GHhHp2vIQKjEA1SfpddaEShfgSKnivceHcxAeqOGhytIQKvAuEy7uAReU8ayiCUMuLTyxwu6ueuxwRj8o5h6qaOHZpM8kxAVcX52C5Xrmcw++gTVJYVAV3rkcBUFXgjUN1QVQloaqFkwCowEmo6uGCKliqslsjP8wrSjgFrZILofQquNbVFyqqCrZ26r8WUSXAsn7g2sofKjgGF6lWBWwB1X9vB0VF6Z+fuBRBONY/j7h0Xy79oor+AapAlBwXt2wBVvQqSvpDtcC1iFT+o8K2yeqcxkK1fA5eP7vKx9yPhkflHorO/RcuGUQhWWHtL7PHZb1QRC1HLXA0v6gESssNjS80zkvZamXiYYXtk6MSrJNKJKO5aKBUApnPaUdwjQM9zg6TF9n4yUk8nv2cLJ+OPjc/y9K5/DRqNHhJONHwq9iFIuRzefbzGaHDwD8JNZGAlyfdSaiJzUo0p1BmawCpVLrdeqPZbNS7FUqYOpSfVJBFk5vlwrkhMUXnRKG8KQhaThm3pWLdRmv9+mZr7+seyNe9drpCTQ7lI5XOUiJgtcsmC+cTEVG6iMOVUQEovSACGWvcfrnbkqSQGUnuCJNq+UkFSqDlckoUnLsoVk6y2c1s9veaQIvAS+dzYE7pJqp+v7+3H7JGfpgUy18qlorAr741Gs7+cQHBnzVgUmh41kKsu36zF8rYUKHQU90sls9UABHRf/Igz0T1v4sRLa//6EJeH30C1bqzl8lIMW0Wy28qUC5WM35QZCqKJuprHFW73ptjAkOw52MVqAcbmXHlo4aJjTVu5hVKXzFIH6t0GKhYXlGUvKYJ5OhSJFCDr6j5ZOaxO55YWFTi0izWWCYoYWq5pgZbjqhQsTUagiIe1c8IlXZBheQ+NWobGBXVch5+cF71yICpqMadGyoktbGqovRrI3bnXqam5tWzMGqORfVqFE3dbrnUSZYfO9tioFRCax89/sAGN5N5Aun0+g1xjAqGSux+QY+/Yqff7FLGpzMCO+kQCJWAvlLJcroLt/f2DkFQiQLixgPu+7oCQhQUFXpTIbdFdl6PAKhE9hpRKqlTm1Momo4GQMU2UQug3BTm9sCjet1VmH1GXKukNjW/BxbVZvRVEVE3VXKdnt8j4n8VXUdsa6XetkOXAKjYNGIAymnRqQ8WVeQ1Qa6AmQbt1Mf3qmgUNa2etGigVTTqxkrqsY6dfK8SUdt1uS8GW0U/I7ZLxZbjtPK/Koq6X3ysOU4r36ui3TZisSg6D0D/q+qIaSV1nAeg71X01R5isfgWEBXcGtGIrR2bRnxdUJzsLGjkBMOhess4cWhRZMXtWr3RbKXXbXlGfWIhPZivp7sIFuOhCnhYNjJsDPq311++3NzdbaGyf2dXhfbNl/euEcuhlyqm9a0jPYIUZQlx5hkjyK8VM5PI6x7VapNBJ8Jol83080MnU5wjWyBSW7MdmPNSpctANK0GhmE74/pBOlL1ZFd5WqtpHLjlpaOdF9RL6nikesu5s2DEe/kFql7EdiAsI9BdpeVr9ctGM11cXiXf2g/nB9Vw0O89gUklF1+AAvf6/lQx2k5t2Ly/7bxoucg0farSAy7KjNZffmKhFgu/qPStBs02l14E5b59scCvMi//DAeWCLBGgEWi+Wcr/dy/feh1npZFSbKIeI/wqnYum4MBAPS/ff/+/cePTucJrBISWCVAZFmSpGVLJckDRKlw10rThsPLqz9bg/R9v99/6LXbbQjT93vGhk+aCZoyeTnTQqE8m1fGpn10h8REtHx+CEZiE3qn84C8DTFfbjFIFCZVmBm5OPNX8O/k4Vg272juibeo73hak7mpH2bmuPpvYTwq5+eXzU0EdcuYuWTc+vlaxeRvEKUCe3R/qF74vECuifowuhNx7cj7WcUMUF/HfbM+uC1oKtRXp/Ig4CruFlGrx0vXJz/6W7XTRiwWxQU6+lnFDZEfRrsPQH+rrhAf28oPAVcxLZTq2X1ahfm3/lVFUIuF3PKLauWFKtTX3JnmIqoDDKrDuU+NdkqYQ/2kWWc474HS011xPBEs8eZFqkvUEviDW6DrJwwogjh9SbE41Jf30nfGVPNh4zf4p9Ezl43/mML0XMTSDr80jFvfkmwp3rsNwFTqTQEPiiAK71feLJv//YbIH5/eOmeljPVx5oll86LD4BT9ijf5PzJkOl2Gh1F3AAAAAElFTkSuQmCC',
    'data:image/png;base64,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',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AnwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAcBBQYDAv/EADwQAAIBAwIEAwMICAcAAAAAAAABAgMEBQYRBxIhMUFRYSKBoRMUIzJxgpGxJEJSU8HR4vAIFhczVmJz/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY3RCvMzi7B8t9krO3flWrxg/iwJwIlllMffrexvra5/8a0Z/kyVuvMDIAAAAAAAAAAAAAAAAAAHhe3dCxtK13d1YUrejBzqVJvZRilu2z3Ko403t1krzB6Nx1SUKmVrqVdx/dp7Lf07v7oGur5/VXE/I17PSlSeJ0/SlyVL97xnU9669f2Vt6vqbrHcEtM0482TrX+QuJdZ1KlblTf3ev4tnf4LE2eDxNrjcfSVO3t4KMF4vzb9X3ZPAq3JcFMIvptP39/i7yK+jnGs5RT8P+34Mg4bWOoND5mjgOIL+Ws6z5bbKp77rsnJ+K89+q8S4DQa301baq09c4y5iueUXKhU8adRfVl/P0bA3sJKUU0001umnumfRXHA7OXOT0vUxuQcneYms7efO/a5f1d/s6r3FjgAAAAAAAAAAAAAAAACpM3yr/EDhncL2fmH0O/7W1Tt8S2yqeNNhdWFxhdZY6m51sTXiq6iu9PfdN+m+6+8Baq7dDJrdP5mzz2ItcnjqiqW9xBSTXeL8U/VPozZADDMnO661Pa6U09c5K4lH5VLlt6TfWpUfZbfF+iA4fhJy/5/1y6H+x86Xbtzc89/4ltFdcEMDcYrS08hkFJXuVqu5nz/AFuX9Xf7d2/eWKAAAAAAAAAAAAAAAAAPC8tqN3a1ba5pRrUK0XCpTmt1KLWzTPuvXp29KdWvUjTpQXNKc3sorzbK5zPGnTdlc/NsbSu8rW32/RobRb9G+/uTA0dfTWquGmQr5DR0Z5XBVZc1XHS3lOH2Lu9vNdfNM2thxu0+48mYs8hjrmPSdOVLnSfu6/ijw/1nl/w/L/390iXXFSyvGneaBvbhr97RjP8AOIE/Ica8XU3oacxWQyl3JexBUnFb+7d/AjYTROf1hmaWoOIcuShSfNa4qP1Yrv7S8F26d34nna8WLa0W1poXIW68qVJR/KJIXGhx+tpDLJeL2/pAtiMVHbZbbLYyV7p7jBpjMXEbW4nWxtzKXKoXcdo7+XMt0vfsWBCSnFSi90+zXiB9AAAAAAAAAAAAABh9jJBztarbYTIV7eLlWpW1SdNRW7clFtfECo8/Wv8AinrOtp6xuJ0NOYuf6ZVh0+Vmm17+q2S7dG/ItPT2nMRpy1ja4expW9NLrJR3nN+cpPq2cbwGxrs9EO5rU5wuLy6qVKjmmpPb2V3+x/iWSAAAAAAc5qzRuF1VZzo5Szg6rW0LmCUalN+al/B9DhOHmVyekNVT0HqGtKrQmnLF3D8Y9Wo7+TS7eDTRbxVPHCzrUrvTGZsKNSV3a3yhzU4tvZtSSe3rH4gWsDCMgAAAAAAAAAAAAADsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z',
];

const HeaderComponent = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src={images[0]} alt="" />
                </div>
                <div className="search">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search Here"
                    />
                    <img src={images[1]} alt="search icon" />
                </div>
                <div className="user-icon">
                    <img src={images[2]} alt="user icon" />
                </div>
            </nav>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);
