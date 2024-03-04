<template>
   <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Gerenciamento do Sistema"
            sub="Cadastros de Usuários" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                <b-tab title="Artigos" active>
                    <ArticleAdmin/>
                </b-tab>
                <b-tab title="Categorias">
                    <CategoryAdmin/>
                </b-tab>
                <b-tab title="Usuários">
                    <UserAdmin/>
                </b-tab>
                </b-tabs>
            </b-card>
        </div>
   </div>
</template>

<script>
import ArticleAdmin from './ArticleAdmin.vue'
import CategoryAdmin from './CategoryAdmin.vue'
import UserAdmin from './UserAdmin.vue'
import PageTitle from '../template/PageTitle'
export default {
    name: 'AdminPages',
    components: { PageTitle, CategoryAdmin, UserAdmin, ArticleAdmin }
}
</script>

<style>

</style>