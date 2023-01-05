import Image from 'next/image';
import styled from 'styled-components';
import IconBell from '../public/images/bell.png';
export const Title = () => {
    return(
        <Wrapper>
            <div className="titleLine firstLine">
                <h1 className='todoToday'><span className="color-yellow">TO</span>DO</h1>
                <div className="IconImgBox">
                    <Image src={IconBell} alt="" />
                    </div>
            </div>
            <div className="titleLine secondLine">
                <h1 className='todoToday'><span className="color-yellow">TO</span>DAY</h1>
            </div>
        </Wrapper>
    )
}

export const Title2 = () => {
    return(
        <Wrapper2>
            <span className="color-yellow">To</span>do <span className="color-yellow">To</span>day
        </Wrapper2>
    )
}

const Wrapper = styled.div`
    width: fit-content;
    margin: 50px 0;
    .todoToday {
    display: inline-block;
    font-size: 4em;
    padding: 0 1.5rem;
    letter-spacing: 0.5px;
    color: white;
    background-color: #2049B2;
    box-shadow: 0px 4.68526px 4.68526px rgba(0, 0, 0, 0.25);
    position: relative;
    }

    .titleLine {
    position: relative;
    }

    .firstLine {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    left: -10px;
    }

    .firstLine .todoToday {
    transform: rotate(-8.06deg);
    z-index: 1;
    }

    .secondLine {
    right: -70px;
    bottom: 10px;
    }

    .secondLine .todoToday {
    transform: rotate(-2.44deg);
    }

    .firstLine .IconImgBox {
    width: 120px;
    height: fit-content;
    position: relative;
    left: -10px;
    bottom: -10px;
    z-index: 3;
    }

    .firstLine .IconImgBox img {
    transform: scale(1);
    }

    .color-yellow {
    color: #F9D932;
    }
`

const Wrapper2 = styled.h1`
    background: #2049B2;
    color: white;
    padding: 2px 10px;
    margin: 20px 0;
    font-size: 3.4em;
    padding: 0.1em 1.5rem;
    letter-spacing: 2px;
    .color-yellow {
        color: #F9D932;
    }
`