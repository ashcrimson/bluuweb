<template>
    <v-container>
        <v-layout>
            <v-flex>

                <v-btn>Texto</v-btn>

                <v-btn color="primary">Texto</v-btn>
                <v-btn dark color="blue">Texto</v-btn>

                <v-btn color="secondary" flat>Sin Fondo</v-btn>

                <v-btn color="warning" large>Largo</v-btn>
                <v-btn color="warning" small>Largo</v-btn>

                <v-btn color="warning" large :disabled="false">Largo</v-btn>

                <v-btn color="info" depressed>Botón</v-btn>

                <v-btn>
                    <v-icon>forum</v-icon>
                </v-btn>

                <v-btn color="primary" icon flat>
                    <v-icon>forum</v-icon>
                </v-btn>

                <v-btn fab>
                    <v-icon>forum</v-icon>
                </v-btn>

                <v-btn fab small>
                    <v-icon>forum</v-icon>
                </v-btn>

                <v-btn fab large>
                    <v-icon>forum</v-icon>
                </v-btn>

                <v-btn color="success">
                    Texto
                    <v-icon>forum</v-icon>
                </v-btn>

                <v-btn color="success">
                    Texto
                    <v-icon class="ml-2">forum</v-icon>
                </v-btn>

                <v-btn color="success">
                    Texto
                    <v-icon right>forum</v-icon>
                </v-btn>

                <v-btn color="success">
                    <v-icon left>forum</v-icon>
                    Texto
                </v-btn>

                <v-btn color="success" outlined>
                    <v-icon left>forum</v-icon>
                    Texto
                </v-btn>

                <v-btn color="success" outlined block>
                    <v-icon left>forum</v-icon>
                    Texto
                </v-btn>

                
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script> 
export default {
    data(){
        return {
            
        };
    }
}
</script>