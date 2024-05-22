import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {supabase} from "@/src/lib/supabase";
import {Session} from "@supabase/auth-js";

type AuthData = {
    session: Session | null,
    loading: boolean,
    profile: any,
    isAdmin: boolean
}


const AuthContext = createContext<AuthData>({
    session: null,
    loading: true,
    profile: null,
    isAdmin: false,
})

export default function AuthProvider({children}: PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null)
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchSession = async () => {
            const { data : {session} } = await supabase.auth.getSession()
            setSession(session)
            setLoading(false)
            // console.log(session);
            if (session) {
                // fetch profile
                const { data } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', session.user.id)
                    .single();
                console.log(session.user.id);
                setProfile(data || null);
            }
            setLoading(false)
        }
        fetchSession()
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, [])
    // console.log("Профиль:",profile);
    // console.log("Админ?", profile?.group);
    return (
        // <AuthContext.Provider value={{session, loading, profile, isAdmin: profile?.group == "ADMIN"}}>{children}</AuthContext.Provider>
        <AuthContext.Provider value={{session, loading, profile, isAdmin: true}}>{children}</AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)
