<template>
    <v-container>
        <v-layout style="margin-top: 150px;">
            <v-flex sm12 md6 offset-md3>
                <v-card>
                    <v-col md="12">
                        <v-row>
                            <v-col md="12">
                                <v-text-field
                                    label="Username"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field
                                    label="Password"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col md="12">
                                <v-row>
                                    <v-col>
                                        <v-btn block color="primary">
                                            Login
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-btn
                                            block color="primary"
                                            @click="redirectDaftar()"
                                        >
                                            daftar
                                        </v-btn>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <p>
                                            Lupa password?
                                            <router-link to="lupa-password"> Klik disini </router-link>
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    methods: {
        redirectDaftar() {
            this.$router.push("/daftar");
        }
    }
}
</script>