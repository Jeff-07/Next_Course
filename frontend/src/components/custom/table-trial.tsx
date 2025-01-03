import { table } from "console";
import { createElement } from "react";

export function TableSection({data}:{readonly data : any}) {
    console.log("Table Data:");
    console.dir(data, {depth:null});

    const {heading, subHeading, tableHeading, tableValues, background} = data;
    const {length} = tableValues;
    const imageURL = "http://127.0.0.1:1337" + background.url;
    return(
        <div className="relative h-[600px] overflow-hidden">
            <img 
                alt="Background" 
                className="absolute inset-0 object-cover w-full h-full" 
                height={1080} 
                src={imageURL} 
                style={{
                    aspectRatio: "1920/1080",
                    objectFit: "cover",
                }}
                width={1920}
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20">
                <table className="">
                    <thead className="text-2xl">
                        <tr>
                            <th>{tableHeading.value_1}</th>
                            <th>{tableHeading.value_2}</th> 
                            <th>{tableHeading.value_3}</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {tableValues.map((tableValues: any)=>(
                            <tr key={tableValues.id }>
                                <td>{tableValues.value_1}</td>
                                <td>{tableValues.value_2}</td> 
                                <td>{tableValues.value_3}</td>    
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}