const Queue = () =>{
    let data = [];

    const add = (number) =>{
        data.unshift(number);
    }


    return {
        add,
        remove,
        print
    }
}