import { Photo } from './styles'

const PhotoImp = ({index, ...rest}) => {
    return(
        <Photo index={index} {...rest} > 
            <Photo.Image />

            <Photo.MoveButton>
                <Photo.MoveIcon />
            </Photo.MoveButton>
        </Photo>
    )
}

export default PhotoImp
