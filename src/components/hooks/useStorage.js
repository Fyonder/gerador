import AsyncSorage from '@react-native-async-storage/async-storage'

const useStorage = () => {

    const getItem = async (key) => {
        try{
            const passwords = await AsyncSorage.getItem(key);
            return JSON.parse(passwords) || [];

        }catch(error){
            console.log("Error ao Buscar", error)
            return [];
        }
    }
    
    const saveItem = async (key, value) => {
        try{
           let passwords = await getItem(key);

           passwords.push(value)
            
           await AsyncSorage.setItem(key, JSON.stringify(passwords))
        
        }catch(error){
            console.log("Error Ao Salvar", error)
        }
    }
    
    const removeItem = async (key, item) => {
        try{
            let passwords = await getItem(key)
            
            let myPasswords = passwords.filter((password) => {
                return (password !== item)
            })
            
            await AsyncSorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;

        }catch(error) {
            console.log("Error Ao Deletar", error)
        }
    }
    
    return{
        getItem,
        saveItem,
        removeItem,
    }
}

export default useStorage;