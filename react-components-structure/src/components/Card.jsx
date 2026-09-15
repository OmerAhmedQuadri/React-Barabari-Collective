import Button from "./Button"

export default function Card (props) {

    return (
        <div 
        style={{
            width:'200px',
            height:'250px',
            border:'2px solid black',
            backgroundColor:'grey',
            borderRadius:'5px',
            padding:'5px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column'
        }}
      >
        <h1>{props.title || 'Default Title'}</h1>
        <p>{props.desc || 'This is a very long description for the card item'}</p>
        <b>${props.price || '39.49'}</b>

        <Button btn={props.btn}/>
      </div>
    )

}

