(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_blog_[id]_page_tsx_b53fce._.js", {

"[project]/app/blog/[id]/page.tsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Post,
    "generateMetadata": ()=>generateMetadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
async function getData(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    });
    if (!response.ok) throw new Error('Такого поста не существует');
    return response.json();
}
async function generateMetadata({ params: { id  }  }) {
    const post = await getData(id);
    return {
        title: post.title
    };
}
async function Post({ params: { id  }  }) {
    const post = await getData(id);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                children: post.title
            }, void 0, false, {
                fileName: "<[project]/app/blog/[id]/page.tsx>",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: post.body
            }, void 0, false, {
                fileName: "<[project]/app/blog/[id]/page.tsx>",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}

})()),
}]);

//# sourceMappingURL=app_blog_[id]_page_tsx_b53fce._.js.map