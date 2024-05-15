import profile from "../assets/profile.webp"
const Account = () => {
  
  return (
    <div>
      <div className="modal">
        <center>
            <img src={profile} alt="" className="profile"/>
        </center>
        <hr />
        <div className="badge-div">
            <p className="badge">Badge :</p>
            <p>None</p>
        </div>
        <hr />
        <div className="badge-div">
            <p className="badge">Language :</p>
            <p>English</p>
        </div>
        <hr />
        <div className="btns-div">
          <button className="button2">
              <svg
                className="svg-icon"
                fill="none"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="white" strokeLinecap="round" strokeWidth="1.5">
                  <circle cx="10" cy="10" r="2.5"></circle>
                  <path
                    clipRule="evenodd"
                    d="m8.39079 2.80235c.53842-1.51424 2.67991-1.51424 3.21831-.00001.3392.95358 1.4284 1.40477 2.3425.97027 1.4514-.68995 2.9657.82427 2.2758 2.27575-.4345.91407.0166 2.00334.9702 2.34248 1.5143.53842 1.5143 2.67996 0 3.21836-.9536.3391-1.4047 1.4284-.9702 2.3425.6899 1.4514-.8244 2.9656-2.2758 2.2757-.9141-.4345-2.0033.0167-2.3425.9703-.5384 1.5142-2.67989 1.5142-3.21831 0-.33914-.9536-1.4284-1.4048-2.34247-.9703-1.45148.6899-2.96571-.8243-2.27575-2.2757.43449-.9141-.01669-2.0034-.97028-2.3425-1.51422-.5384-1.51422-2.67994.00001-3.21836.95358-.33914 1.40476-1.42841.97027-2.34248-.68996-1.45148.82427-2.9657 2.27575-2.27575.91407.4345 2.00333-.01669 2.34247-.97026z"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
              <span className="label2">Account</span>
          </button >

          <button className="Btn3" >
          <div className="sign3"><svg viewBox="0 0 512 512" className="svg3"><path className="path3" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
          <div className="text3" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout</div>
          </button> 
        </div>
      </div>
    </div>
  )
}

export default Account
