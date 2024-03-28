import { createNativeStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import CadastroFilme from '../pages/CadastroFilme';
import EditarFilme from '../pages/EditarFilme';
import PesquisaFilme from '../pages/PesquisaFilme';
import ExibirTodosFilmes from '../pages/ExibirTodosFilmes';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>

            <Stack.Screen
            name="Home"
            component={Home}
            />

            <Stack.Screen
            name="CadastroFilme"
            component={CadastroFilme}
            />

            <Stack.Screen
            name="EditarFilme"
            component={EditarFilme}
            />

            <Stack.Screen
            name="PesquisarFilme"
            component={PesquisaFilme}
            />

            <Stack.Screen
            name="ExibirTodosFilmes"
            component={ExibirTodosFilmes}
            />

        </Stack.Navigator>
    )
}
