import Image from 'next/image'

import { Photo } from './styles'

const PhotoImp = ({index, src, ...rest}) => {
    return(
        <Photo index={index} {...rest} > 
            <Photo.ImageWrapper>
                <Photo.Image 
                    src={src}
                    alt={src.split('/')[4]}
                    width={415}
                    height={276}
                />
            </Photo.ImageWrapper>

            <Photo.MoveButton>
                <Photo.MoveIcon />
            </Photo.MoveButton>
        </Photo>
    )
}

export default PhotoImp
