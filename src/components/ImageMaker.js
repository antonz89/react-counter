const ImageMaker = (props) => {
    let x = props.count

    let arr = []

    while(x>0){
        let obj={
            source:"https://www.istockphoto.com/resources/images/FreePhotos/RF-813062534_740x492.jpg"
        }
        arr.push(obj)
        x--
    }

    return ( 
        <div>
            {arr.map(e=>{
                return <img src={e.source} alt="x" />
            })}

        </div>
    );
}
 
export default ImageMaker;

// img src="https://www.istockphoto.com/resources/images/FreePhotos/RF-813062534_740x492.jpg" alt="zzz" />