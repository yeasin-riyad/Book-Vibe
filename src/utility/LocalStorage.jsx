import { json } from "react-router-dom";
// Get Save Books Id:
const getSaveBooksId=()=>{
    const storedSaveBooksId=localStorage.getItem('readBooksId');
    if(storedSaveBooksId){
        return JSON.parse(storedSaveBooksId)
    }else{
        return [];
    }
}

const GetSaveBooks=()=>{
    const StoredSaveBooks=localStorage.getItem('readBooks')
    if(StoredSaveBooks){
        return JSON.parse(StoredSaveBooks)
    }else{
        return []
    }
}


const saveBooksId=(id,book)=>{
    const storedSaveBooksId=getSaveBooksId()
    const StoredSaveBooks=GetSaveBooks()
    const exist=storedSaveBooksId.find((bookId)=>id==bookId)
    if(!exist){
        storedSaveBooksId.push(id)
        localStorage.setItem('readBooksId',JSON.stringify(storedSaveBooksId))
        StoredSaveBooks.push(book)
        localStorage.setItem('readBooks',JSON.stringify(StoredSaveBooks))
    }

}


// WhiteList Id

const getWhiteListId=()=>{
    const storedWhiteListId=localStorage.getItem('whiteListId');
    if(storedWhiteListId){
        return JSON.parse(storedWhiteListId)
    }
    return [];
}

const getWhiteList=()=>{
    const storedWhiteList=localStorage.getItem('whiteList');
    if(storedWhiteList){
        return JSON.parse(storedWhiteList)
    }
    return [];
}

const whiteListsId=(id,book)=>{
    const storedWhiteListId=getWhiteListId();
    const storedWhiteList=getWhiteList();
    const exist=storedWhiteListId.find((bookId)=>id==bookId)
    if(!exist){
        storedWhiteListId.push(id)
        localStorage.setItem('whiteListId',JSON.stringify(storedWhiteListId))
        storedWhiteList.push(book);
        localStorage.setItem('whiteList',JSON.stringify(storedWhiteList))
    }
}




export {whiteListsId,getWhiteListId,saveBooksId,getSaveBooksId,getWhiteList,GetSaveBooks}